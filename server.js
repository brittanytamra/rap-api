const { response } = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let rappers = {

  '21 Savage': {
    'age': 28,
    'birthName': 'Sheyaaa Bin Abraham-Joseph',
    'birthLocation': 'London,England'
   },
   'Chance the Rapper':{
    'age': 27,
    'birthName': 'Chancelor Jonathan Bennett',
    'birthLocation': 'Chicago, Illinois',
   },
   'dylan':{
    'age': 28,
    'birthName': 'dylan',
    'birthLocation': 'dylan'
   }

 }

app.get('/', (request) => {
response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers/:rappersName', (request, response)=>{
    const rapperName = request.params.rapperName.toLowerCase()
    if(rappers[rapName]){
        response.json(rappers[rapName])
    } else{
        response.json(rappers['dylan'])
    }
   
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})