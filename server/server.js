import express from 'express'
import axios from 'axios'

const app = express()
app.listen(8000)

app.get('/:cep', async (req, res) => {
    const result = await axios.get(`https://viacep.com.br/ws/${req.params.cep}/json/`).then((res) => {
        return res.data
    }).catch(err => {
        return {'error': 404}
    })
    return res.send(result)
})
