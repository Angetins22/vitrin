import { Button } from '../ui/button'
import { CiSearch } from "react-icons/ci";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "../ui/input-group"
import { FaImage } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "../ui/dialog"
import { FieldGroup, Field } from '../ui/field';
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea';

export function ListaProdutos() {
    return (
        <section className="lg:col-span-5 border border-border rounded-xl p-4 flex flex-col gap-4 bg-card shadow-sm">
            <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-bold">Meus Produtos</h2>
                <Dialog>
                    <form className="flex flex-col gap-5 mt-4">
                        <DialogTrigger render={<Button variant="outline" size="sm" className="cursor-pointer flex items-center gap-2">Cadastrar Produto</Button>}></DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] bg-card text-card-foreground p-6 rounded-xl border border-border">
                            <DialogHeader className="flex flex-col items-center justify-center pb-2 border-b border-border">
                                <DialogTitle className="text-xl font-bold text-center">Cadastre seu produto</DialogTitle>
                            </DialogHeader >
                            <FieldGroup>
                                <Field className="grid grid-cols-4 items-center">
                                    <label htmlFor="nome" className="text-left text-sm font-semibold">Nome*:</label>
                                    <Input id='nome' className="col-span-3" placeholder='Insira o nome do produto'></Input>
                                </Field>
                                <Field className="grid grid-cols-4 items-center">
                                    <label htmlFor="nome" className="text-left text-sm font-semibold">Preço*:</label>
                                    <div className="col-span-3 flex items-center gap-2">
                                        <span className="text-sm">R$</span>
                                        <Input
                                            id="preco"
                                            type="number"
                                            step="0.01"
                                            placeholder="00,00"
                                            className="w-32"
                                        />
                                    </div>
                                </Field>
                                <Field className="grid grid-cols-4 items-center gap-4">
                                    <label className="text-left text-sm font-semibold leading-tight">Foto*:</label>
                                    <div className="col-span-3">
                                        <label
                                            htmlFor="foto"
                                            className="cursor-pointer border-2 border-dashed border-border hover:border-primary/50 rounded-xl p-3 flex flex-col items-center justify-center gap-1 bg-muted/20 hover:bg-muted/40 text-muted-foreground hover:text-foreground transition-all w-40 text-center"
                                        >
                                            <FaImage className="h-5 w-5" />
                                            <span className="text-xs font-medium leading-tight">
                                                Insira sua Imagem
                                            </span>
                                            <input id="foto" type="file" accept="image/*" className="hidden" />
                                        </label>
                                    </div>
                                </Field>
                                <Field className="grid grid-cols-4 items-start gap-4">
                                    <label htmlFor="descricao" className="text-left text-sm font-semibold pt-2">Descrição*:</label>
                                    <Textarea
                                        id="descricao"
                                        rows={3}
                                        placeholder="Uma breve descrição dele"
                                        className="col-span-3 resize-none"
                                    />
                                </Field>
                            </FieldGroup>
                            <DialogFooter>
                                <DialogClose render={<Button className='cursor-pointer' variant="outline">Cancelar</Button>} />
                                <Button className='cursor-pointer' type='submit'>Salvar</Button>
                            </DialogFooter>
                        </DialogContent>
                    </form>
                </Dialog>
            </div>

            <div className="relative">
                <InputGroup>
                    <InputGroupInput placeholder="Filtrar produto pelo nome" />
                    <InputGroupAddon>
                        <CiSearch />
                    </InputGroupAddon>
                </InputGroup>
            </div>

            <div className="grid grid-cols-3 gap-3 overflow-y-auto max-h-[calc(100vh-280px)] p-1">
                {Array.from({ length: 9 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="border border-border rounded-lg p-2 bg-background flex flex-col gap-1.5 text-xs hover:border-primary/50 transition-colors"
                    >
                        <div className="h-16 bg-muted rounded flex items-center justify-center">
                            <FaImage className="h-5 w-5 text-muted-foreground" />
                        </div>

                        <div className="flex items-center justify-between gap-1">
                            <span className="font-semibold truncate text-foreground">
                                Nome {idx + 1}
                            </span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-muted-foreground hover:text-primary cursor-pointer shrink-0"
                                title="Editar produto"
                            >
                                <MdEdit className="h-3.5 w-3.5" />
                            </Button>
                        </div>

                        <div className="flex items-center justify-between gap-1">
                            <span className="text-muted-foreground font-medium">
                                R$ 00,00
                            </span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6 text-muted-foreground hover:text-destructive cursor-pointer shrink-0"
                                title="Excluir produto"
                            >
                                <MdDelete className="h-3.5 w-3.5" />
                            </Button>
                        </div>


                        <p className="text-[10px] text-muted-foreground line-clamp-2 mt-0.5">
                            Descrição
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}