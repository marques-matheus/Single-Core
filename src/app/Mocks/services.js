import { MdOutlineSupportAgent, MdOutlineCable,MdComputer, MdOutlineCloudDone} from "react-icons/md";
import {IoRocketOutline} from "react-icons/io5"
import { HiOutlinePhone } from "react-icons/hi"
import { GrShieldSecurity } from "react-icons/gr";
import { FaRegHandshake } from "react-icons/fa";
const services = [
  {
    icon: <MdOutlineSupportAgent size={55} className="self-center" />,
    "titulo": "SUPORTE TÉCNICO DE TI E TELECOM",
    "descricao": "Conte com atendimento humanizado para antecipar e solucionar possíveis problemas tecnológicos da sua empresa. Criamos resultados eficientes em TI para que seu negócio esteja sempre a frente. Oferecemos soluções personalizadas e eficazes."
  },
  {
    icon: <MdOutlineCable size={55} className="self-center" />,
    "titulo": "ESTRUTURAÇÃO DE REDE DE COMPUTADORES",
    "descricao": "Tão importante quanto contar com excelentes soluções em TI e Telecom é entender a forma correta de estruturação da rede. Oferecemos soluções personalizadas, montagens e atualizações para garantir a escalabilidade de recursos computacionais."
  },
  {
    icon: <IoRocketOutline size={55} className="self-center" />,
    "titulo": "ADEQUAÇÃO DE EMPRESAS A LGPD",
    "descricao": "LGPD foi um dos temas mais buscados nos últimos anos. Oferecemos segurança, legalidade e alta tecnologia para garantir a adequação da sua empresa. Nossa equipe é especializada em LGPD e está pronta para ajudar."
  },
  {

    icon: <HiOutlinePhone size={55} className="self-center" />,
    "titulo": "PROVISÃO DE INTERNET E TELEFONIA",
    "descricao": "Por meio de parcerias firmadas entre grandes fornecedores de soluções de Internet e Telecom, oferecemos soluções capazes de atender às demandas de link dedicado e telefonia em larga escala. Preços altamente competitivos e soluções personalizadas."
  },
  {
    icon: <GrShieldSecurity size={55} className="self-center" />,
    "titulo": "IMPLANTAÇÃO E GERENCIAMENTO DE FIREWALL",
    "descricao": "O Firewall age como uma barreira protetora, analisando o tráfego de rede e aplicando regras para garantir a segurança dos dados. Nós cuidamos da implementação, configuração e acompanhamento do processo."
  },
  {
    icon: <MdComputer size={55} className="self-center" />,
    "titulo": "LOCAÇÃO DE EQUIPAMENTOS TI E TELECOM",
    "descricao": "Sua empresa não precisa desembolsar capital para investir em equipamentos de TI e Telecom. Disponibilizamos a locação destes, para que possa redirecionar os investimentos a outro setor específico de sua atuação."
  },
  {
    icon: <MdOutlineCloudDone size={55} className="self-center" />,
    "titulo": "SERVIÇOS DE CLOUD",
    "descricao": "Acesse todas as informações da sua empresa, em qualquer lugar do mundo e a qualquer hora. Com segurança, praticidade e mobilidade. Oferecemos soluções de armazenamento e backup em nuvem personalizadas."
  },
  {
    icon: <FaRegHandshake size={55} className="self-center" />,
    "titulo": "ATENDIMENTO HUMANIZADO",
    "descricao": "Uma de nossas expertises é o atendimento humanizado. Acreditamos que a humanização ajuda a acelerar os resultados e alcançar as metas traçadas de forma hábil. Nossa equipe está pronta para ajudar."
  }
]

export default services