from requests_html import AsyncHTMLSession,HTMLSession
import asyncio
if asyncio.get_event_loop().is_running(): # Only patch if needed (i.e. running in Notebook, Spyder, etc)
    import nest_asyncio
    nest_asyncio.apply()
session = HTMLSession()
asession = AsyncHTMLSession()
async def getWebsite():
  r = await asession.get('https://www.psacard.com/cert/42052094')
  print(r.html.arender())
  return await r.html.arender()
  # resp=r.html.raw_html
  # print(resp)
asession.run(getWebsite)
