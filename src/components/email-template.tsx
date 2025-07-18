type Props = {
  Email: string
  Message: string
}

export const EmailTemplate = ({ Email, Message }: Props) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '1rem' }}>
      <h2>📬 New Message from Portfolio</h2>
      <p><strong>Sender:</strong> {Email}</p>
      <p><strong>Message:</strong></p>
      <p>{Message}</p>
    </div>
  )
}
