
from bs4 import BeautifulSoup
import pandas as pd
import requests




urls = ["https://www.amazon.in/Rage-Coffee-Butterscotch-Delight-Flavour/dp/B08Q46TB9S/ref=sr_1_4?crid=10F0UTWL7KI4S&keywords=rage+coffee&qid=1654504910&s=grocery&sprefix=rage+co%2Cgrocery%2C343&sr=1-4",
       "https://www.amazon.in/Rage-Coffee-Ethiopian-Crystals-Vitamins/dp/B07NS2FZJX/ref=pd_rhf_dp_s_pop_multi_srecs_sabr_cn_sccl_2_1/258-6427085-6344043?pd_rd_w=dxHST&content-id=amzn1.sym.b6b5176a-7e30-4430-9a6a-1fb903d3c497&pf_rd_p=b6b5176a-7e30-4430-9a6a-1fb903d3c497&pf_rd_r=VRT2AKGGV65Q9X8BCVSH&pd_rd_wg=OPlCq&pd_rd_r=fc9f8170-068c-497f-a7de-e7ed7524e2e9&pd_rd_i=B07NS2FZJX&psc=1"]

df1 = pd.read_csv("/home/chirag/Practice/Python/Amazon Product Link - Links.csv")

count = 0
results = []
for url in df1["Product Link"][0:2]:
    HEADERS = ({'User-Agent':
               'Mozilla/5.0 (X11; Linux x86_64)AppleWebKit/537.36 (KHTML, like Gecko)Chrome/44.0.2403.157 Safari/537.36',
                               'Accept-Language': 'en-US, en;q=0.5'})

    webpage = requests.get(url, headers=HEADERS).text
    soup = BeautifulSoup(webpage, "html.parser")
    # tables = soup.find_all('table')
    # tabl = tables[3]
    data = {}
    data['root'] = url
    for item in soup.select('table.a-normal a-spacing-micro tr'):
        data[item.td[0].text.strip(' \n')] = item.td[1].text.strip(' \u200e\n')
    results.append(data)
    count+=1
    print("{} Completed".format(count))
df = pd.DataFrame(results)
df.to_csv("Amazon_Desc1.csv")