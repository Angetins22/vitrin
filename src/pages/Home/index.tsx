import { ListaProdutos } from '@/components/ListaProdutos'
import { PreviewCatalogo} from '@/components/PreviewCatalogo'

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
      <ListaProdutos />
      <PreviewCatalogo />
    </div>
  )
}