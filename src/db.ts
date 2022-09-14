import { createConnection } from 'typeorm'
import { Users } from './entities/Users'

export const connectDB = async () => {
  await createConnection({
    type: 'mysql',
    username: 'root',
    password: 'juan',
    port: 3306,
    host: 'localhost',
    database: 'usersdb',
    entities: [Users],
    synchronize: false,
    ssl: false
  })
}