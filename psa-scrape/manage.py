import cloudscraper
from bs4 import BeautifulSoup 

scraper = cloudscraper.create_scraper()
certification_number = 46946552
r= scraper.get(f'https://www.psacard.com/cert/{certification_number}')
soup = BeautifulSoup(r.content,'html5lib')
header_list=soup.find(class_="table table-fixed table-header-right text-medium").findAll('th')
data_list=soup.find(class_="table table-fixed table-header-right text-medium").findAll('td')
list_dict={}
for element_index in range(len(header_list)):
  list_dict[header_list[element_index].text.strip()]=data_list[element_index].text.strip()
print(list_dict)

