import LogoTCC from '@/assets/LogoTCC.png'

export function Header() {
    return (
        <header className="flex items-center justify-between p-4 shadow-sm">
            <div className="flex items-center gap-2">
                <img src={LogoTCC} alt='Logo do Vitrin' className='rounded-full h-20 w-20' />
                <span className='text-3xl font-bold'>Vitrin</span>
            </div>
            <div className='flex items-center gap-2'>
                <p> Angelo22</p>
                <img src={LogoTCC} alt='Foto do usuário' className='rounded-full h-12 w-12'/>
            </div>
        </header>
    )
}