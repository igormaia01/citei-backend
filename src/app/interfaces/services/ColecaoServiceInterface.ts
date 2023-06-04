import ColecaoEntity from "../../entities/ColecaoEntity";
import ColecaoInterface from "../entities/ColecaoInterface";

interface ColecaoServiceInterface {
  findAll(): Promise<ColecaoEntity[]>;
  findById(id: number): Promise<ColecaoEntity>;
  create(colecao: ColecaoInterface): Promise<ColecaoEntity>;
  update(id: number, colecao: ColecaoInterface): Promise<ColecaoEntity>;
  delete(id: number): Promise<void>;
}

export default ColecaoServiceInterface;