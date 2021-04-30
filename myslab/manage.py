from bs4 import BeautifulSoup
import pandas as pd
import re
import requests 

 
start_index=98853
link='https://myslabs.com/slab/view/'
complete_data_list=[]
counter_index=1
for index in range(start_index,0,-1):
	URL = f'{link}{index}/'
	r = requests.get(URL) 
	soup = BeautifulSoup(r.content, 'html5lib')
	
	soup_item=soup.find(class_="single_slab_right")
	status=soup_item.contents[4].split(" ")[-1] if soup_item else None
	data={}	
	if status and status=='Sold':
		print(counter_index)
		data["name"]=soup_item.find('h3').contents
		data["price"]=soup_item.find('span').contents
		data["status"]=status
		data["date"]=soup_item.contents[9].split(" ")[-3:]
		data["images"]=re.findall(r'https\S+\.jpeg',str(soup))[-2:]
		complete_data_list.append(data)
		counter_index+=1
		if counter_index % 10==0:
			df = pd.DataFrame(complete_data_list)
			df.to_csv(f'MySlab{counter_index}.csv')


