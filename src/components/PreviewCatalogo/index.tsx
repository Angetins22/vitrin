
import { FaFileDownload } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import { Button } from '../ui/button'

export function PreviewCatalogo() {
    return (
        <section className="lg:col-span-7 border border-border rounded-xl p-6 bg-card flex flex-col justify-between shadow-sm relative min-h-[500px]">
            <div>

                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-2xl font-bold">Catálogo de Produtos</h2>
                        <p className="text-xs text-muted-foreground">Pré-visualização da folha do catálogo</p>
                    </div>

                    <div className="border border-dashed border-border rounded-lg p-2 text-center flex flex-col items-center justify-center w-28 h-20 bg-muted/30">
                        <Button
                            variant="outline"
                            className="cursor-pointer border-dashed border-2 w-32 h-24 flex flex-col items-center justify-center p-2 text-center hover:bg-muted/50 transition-colors whitespace-normal"
                        >
                            <span className="text-xs font-semibold text-foreground">
                                Logo
                            </span>
                            <span className="text-[10px] text-muted-foreground leading-tight mt-1">
                                Coloque a logo da sua marca
                            </span>
                            <input id="foto" type="file" accept="image/*" className="hidden" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 9 }).map((_, idx) => (
                        <div key={idx} className="border border-border rounded-lg p-3 bg-background flex flex-col gap-1 text-xs shadow-xs">
                            <div className="h-20 bg-muted rounded flex items-center justify-center">
                                <FaImage className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <span className="font-semibold text-sm">Nome</span>
                            <span className="text-muted-foreground font-medium">R$ 00,00</span>
                            <p className="text-[10px] text-muted-foreground">Descrição do produto</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-end mt-6 pt-4 border-t border-border">
                <Button size="lg" className="cursor-pointer flex items-center gap-2">
                    <FaFileDownload className="h-4 w-4" />
                    Gerar PDF do catálogo
                </Button>
            </div>
        </section>
    )
}