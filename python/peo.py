from operator import index
import pandas as pd
import time
from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent="myapp")
data = pd.read_csv('/home/chirag/Practice/python/Regions - Sheet1.csv')



states=dict()
for loc in data['Location']:
    location = geolocator.geocode(loc)
    states[loc] = str(location)


frame = pd.DataFrame(states.items(),columns=['City','Details'])
