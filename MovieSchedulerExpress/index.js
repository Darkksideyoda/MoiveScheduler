const express = require('express')
const puppeteer = require('puppeteer');

async function getImages(movieName) { 
		const URL = `https://wall.alphacoders.com/search.php?search=${movieName}`; 
		const browser = await puppeteer.launch(); 
		const page = await browser.newPage(); 
		await page.goto(URL); 
        const imgs = await page.$$eval('img.thumb-desktop[src]', imgs => imgs.map(img => img.getAttribute('src')));
        await browser.close(); 
        return imgs;
} 
 


const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send("Default");

})

app.get('/:movie_name', async (req, res) => {
    const imageData = await getImages(req.params.movie_name);
    res.send(imageData[0]);
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})