import app from './app'
import { connectDB } from './db'

async function main() {
  await connectDB()
  app.listen(3000)
  console.log("Server on port 3000")
}

main()


