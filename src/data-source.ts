import "reflect-metadata";
import { DataSource } from "typeorm";

import * as dotenv from "dotenv";
import { User } from "./entity/User.entity";
import { Movie } from "./entity/Movie.entity";

dotenv.config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE, NODE_ENV } =
  process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,

  synchronize: NODE_ENV === "dev" ? false : false,
//logging logs sql command on the treminal
  logging: NODE_ENV === "dev" ? true : false,
  entities: [User, Movie],
  migrations: [__dirname + "/migration/*.ts", "/Users/timi/web/movie_recommendation_api/migration/1716285585441-movie.ts", "/Users/timi/web/movie_recommendation_api/migration/1716285604793-users.ts"],
  subscribers: [],
});