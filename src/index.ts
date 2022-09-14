import app from './app'
import { connectDB } from './db'
import { PORT } from './config'

async function main() {
  try {
    await connectDB()
    app.listen(PORT)
    console.log("Server on port", PORT)
  } catch (e) {
    console.log(e)
  }
}

main()


