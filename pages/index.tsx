import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/button";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { MdOutlinePermIdentity } from "react-icons/md";
import Link from "next/link";
export default function IndexPage() {
  return (
    <DefaultLayout>
     
 <div>Departamento de Talento Humano</div>
 <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Gestion de Recursos Humanos</p>
        <small className="text-default-500">Solicitar su Permiso</small>
        <h4 className="font-bold text-large">Aqui</h4>
        <Link href="/Permiso">
            <Button
              color="success"
              startContent={<MdOutlinePermIdentity />}
              className="text-white"
            >
              Permisos
            </Button>
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          height={350}
          src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={350}
        />
      </CardBody>
    </Card>
    </DefaultLayout>
  );
}
