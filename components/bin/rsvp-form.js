import { Checkbox, Input, Label, Text } from 'theme-ui'
import useForm from '../../lib/use-form'
import Submit from '../submit'
import { Slide } from 'react-reveal'

export default function RsvpForm() {
  const { status, formProps, useField } = useForm(
    '/api/bin/rsvp',
    null,
    {
      clearOnSubmit: 60000,
      method: 'POST',
      initData: {}
    }
  )

  return (
    <>
      <form {...formProps}>
        <Label>
          <Text>Email</Text>
          <Input
            {...useField('email')}
            placeholder="fiona@hackclub.com"
            required
            sx={{ border: '1px solid', borderColor: 'muted' }}
          />
        </Label>
        <Label variant="labelHoriz" sx={{ fontSize: 1, pt: 1 }}>
          <Checkbox {...useField('high_schooler', 'checkbox')} defaultChecked={false} />I am a current high
          school student or younger.
        </Label>
        <Label variant="labelHoriz" sx={{ fontSize: 1, pt: 1 }}>
          <Checkbox {...useField('stickers', 'checkbox')} />
          I want a sticker sheet.
        </Label>
        {(useField('stickers', 'checkbox').checked) && (
          <Slide left delay={20}>
            <Label>
              Address (line 1)
              <Input
                {...useField('address_line_1')}
                placeholder="1 Hacker Way"
                required
                sx={{ border: '1px solid', borderColor: 'muted' }}
              />
            </Label>
            <Label>
              Address (zip code)
              <Input
                {...useField('address_zip')}
                placeholder="01337"
                required
                sx={{ border: '1px solid', borderColor: 'muted' }}
              />
            </Label>
          </Slide>
        )}
        <Submit status={status} />
      </form>
    </>
  )
}