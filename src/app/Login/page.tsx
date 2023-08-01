import Button from '@/components/Button'
import Input from '@/components/Input'
import { GiSwordsEmblem } from 'react-icons/gi'

export default async function Login() {
  return (
    <>
      <div className="absolute bottom-2 flex w-full items-center justify-center gap-2 opacity-20">
        <h1 className="text-xl font-semibold text-white">Cratist</h1>
        <GiSwordsEmblem color="#fff" size={30} />
        <p className="text-sm text-white">&copy;Powered by RobertooFelipe</p>
      </div>

      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex h-[350px] w-[700px] flex-col justify-between rounded-lg border-[1px] border-lightblue-100 bg-black p-8">
          <div>
            <h1 className="font-regular w-full text-center text-2xl text-white">
              Access your account
            </h1>
          </div>

          <div className="flex flex-col gap-2">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
          </div>

          <div>
            <Button>Acessar</Button>
          </div>
        </div>
      </div>
    </>
  )
}
