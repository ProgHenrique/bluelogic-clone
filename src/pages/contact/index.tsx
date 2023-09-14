import { HiArrowLongRight } from 'react-icons/hi2'
import {
  Form,
  FormContainer,
  FormTitle,
  HeroSection,
  Input,
  Label,
  Main,
  Section,
  SubmitButton,
  TextArea,
} from './styles'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { firstLetterUppercase } from '../../utils/first-letter-uppercase'
import { ChangeEvent } from 'react'

const contactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'O nome deve conter pelo menos 3 letras.' })
    .regex(/^([a-z\\áàâãéèêíïóôõöúçñ ]+)$/i, {
      message: 'O usuário deve conter apenas letras.',
    })
    .transform((name) => firstLetterUppercase(name)),

  email: z
    .string()
    .min(1, { message: 'você deve adicionar um email.' })
    .email({ message: 'digite o email corretamente.' })
    .transform((email) => email.toLowerCase()),
  phone: z
    .string()
    .min(11, { message: 'Insira seu número de telefone completo.' }),
  message: z
    .string()
    .min(3, { message: 'A mensagem deve conter pelo menos 3 letras.' })
    .max(255, {
      message: 'A mensagem nao pode conter mais de 255 caracteres.',
    }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function handleContact({
    email,
    message,
    name,
    phone,
  }: ContactFormData) {
    alert(`
      email: ${email}
      message: ${message}
      name: ${name}
      phone: ${phone.replace(/\D/g, '')}
    `)
    reset()
  }

  function handlePriceChange(event: ChangeEvent<HTMLInputElement>) {
    let inputValue: string = event.target.value.replace(/\D/g, '')

    if (inputValue.length > 11) {
      inputValue = inputValue.substring(0, 11)
    }

    const ddd = inputValue.length > 0 ? `(${inputValue.substring(0, 2)}` : ''
    let phone: string = ''

    if (inputValue.length > 7) {
      const number = inputValue.substring(2)
      const part1 = number.substring(0, 5)
      const part2 = number.substring(5)
      phone = ') ' + part1 + '-' + part2
    } else if (inputValue.length > 2) {
      phone = `) ${inputValue.substring(2, inputValue.length)}`
    } else {
      phone = ''
    }

    const numberFormatted = ddd + phone

    setValue('phone', numberFormatted)
  }
  return (
    <Main>
      <HeroSection>
        <div>
          <h1>Contato</h1>
        </div>
      </HeroSection>
      <Section>
        <FormContainer>
          <FormTitle>
            <h2>Fale com um especialista</h2>
            <p>Envie-nos uma mensagem, que entraremos em contato!</p>
          </FormTitle>
          <Form as="form" onSubmit={handleSubmit(handleContact)}>
            <Label>
              <span>Nome</span>
              <Input type="text" {...register('name')} />
              <p>{errors.name ? `* ${errors.name.message}` : ''}</p>
            </Label>
            <div>
              <Label>
                <span>E-mail</span>
                <Input type="email" {...register('email')} />
                <p>{errors.email ? `* ${errors.email.message}` : ''}</p>
              </Label>
              <Label>
                <span>Telefone</span>
                <Input
                  type="tel"
                  {...register('phone')}
                  onChange={handlePriceChange}
                />
                <p>{errors.phone ? `* ${errors.phone.message}` : ''}</p>
              </Label>
            </div>

            <Label>
              <span>Mensagem</span>
              <TextArea {...register('message')} />
              <p>{errors.message ? `* ${errors.message.message}` : ''}</p>
            </Label>

            <SubmitButton type="submit" disabled={isSubmitting}>
              Enviar
              <span>
                <HiArrowLongRight />
              </span>
            </SubmitButton>
          </Form>
        </FormContainer>
      </Section>
    </Main>
  )
}
