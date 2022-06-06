from bs4 import BeautifulSoup
import pandas as pd
import requests



df1 = pd.read_csv(".csv")


url1 = "https://www.flipkart.com/rage-coffee-100-gms-irish-hazelnut-flavour-premium-arabica-instant/p/itmcf8c39c70131f?pid=CFEFNAGUHTPFMEJZ&lid=LSTCFEFNAGUHTPFMEJZKKSIHZ&marketplace=FLIPKART&q=rage+coffee&store=eat%2Fdui&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=57739a88-d217-494a-8c5d-4ed434ac6b2b.CFEFNAGUHTPFMEJZ.SEARCH&ppt=sp&ppn=sp&ssid=uravxh3a4g0000001654535955038&qH=3c18955655658f0c"
results = []
for url in df1['Product Links']:
    HEADERS = ({'User-Agent':
                   'Mozilla/5.0 (X11; Linux x86_64)AppleWebKit/537.36 (KHTML, like Gecko)Chrome/44.0.2403.157 Safari/537.36',
                                   'Accept-Language': 'en-US, en;q=0.5'})

    webpage = requests.get(url, headers=HEADERS).text
    soup = BeautifulSoup(webpage, "html.parser")
    tables = soup.select('table')
    data1 = {}
    data1['url'] = url1
    for item in tables[1].find_all('tr'):
        data1[item.td.text] = item.ul.text
    results.append(data1)
df = pd.DataFrame(results)
df.to_csv("Flipkart_Desc_data")