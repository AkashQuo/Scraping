from _datetime import datetime 
import os
import json 
import csv 
from pathlib import Path

def file_extraction (file_path):
	my_file = Path(file_path)
	if my_file.exists():
		if os.stat(file_path).st_size == 0:
			return False
		file = open(file_path)
		json_file=data_extraction(file)
		if json_file:
			return data_cleaning(json_file)
	else:
		return False

def data_extraction(file):
	data_json = json.load(file)
	
	if data_json==[] or data_json=={}:
		return False
	elif data_json.get('Products'):
		return data_json['Products']
	else:
		return False

def data_cleaning(json_file):
	pop_item_list=['belowRetail','breadcrumbs','buying_countries','charityCondition','colorway','doppelgangers','gender','hidden','id','childId',
	'lock_selling','minimumBid','objectID','releaseDate','releaseTime','retailPrice','selling_countries','shoeSize','styleId','type','uuid']
	for item in json_file:
		item['TicketSymbol']=item.pop('tickerSymbol')
		item['Name']=item.pop('name')
		item['Title']=item.pop('title')
		item['ShortDescription']=item.pop('shortDescription')
		item['Image/Media']=item.pop('media')	
		item['Market']=item.pop('market')
		item['Brand']=item.pop('brand')	
		item['Description']=item.pop('description')	
		item['Category']=item.pop('category')	
		item['Condition']=item.pop('condition')	
		item['CountryOfManufacture']=item.pop('countryOfManufacture')	
		item['DataType']=item.pop('dataType')	
		item['listingType']=item.pop('listingType')	
		item['ProductsCategory']=item.pop('productCategory')	
		item['Shoe']=item.pop('shoe')	
		item['Traits']=item.pop('traits')	
		item['URLKey']=item.pop('urlKey')	
		item['Year']=item.pop('year')	
		item['Tags']=item.pop('_tags')
	#Pop items
		for pop_item in pop_item_list: 
			item.pop(pop_item)
	return json_file

	
complete_data_list=[]
iterator=1
#iteratior to extract multiple data
while True:
	path=f'./json_files/data_file_{iterator}.json'
	file=file_extraction(path)
	if file:
		complete_data_list.append(file)
	else:
		break
	iterator+=1


excel_file = open(f'CSV/stockX_{datetime.now().strftime("%m%d%Y_%H%M%S")}.csv', 'w')
csv_writer = csv.writer(excel_file)

count = 0
for single_json_data in complete_data_list: 
	for data in single_json_data:
	    if count == 0: 
	        header = data.keys() 
	        csv_writer.writerow(header) 
	        count += 1
	    csv_writer.writerow(data.values()) 
excel_file.close()