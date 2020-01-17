/**
 * Copyright 2018-2020 Symlink GmbH
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 */




import { ObjectID } from "mongodb";

export interface IMongoRepository<T> {
  find(query: object): Promise<T[] | null>;
  findOne(id: string): Promise<T | null>;
  create(item: T): Promise<ObjectID>;
  createMany<K>(docs: Array<K>): Promise<void>;
  update<K>(id: string, item: K): Promise<boolean>;
  updateWithQuery(id: string, query: object): Promise<boolean>;
  delete(id: string): Promise<boolean>;
  deleteMany(filter: object): Promise<boolean>;
}
