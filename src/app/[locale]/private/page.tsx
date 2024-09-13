import { redirect } from 'next/navigation'
import { createClient } from '../../../../utils/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/es/login')
  }

  return <p className="h-96">Hello <br/>Hello <br/>Hello <br/>Hello <br/>Hello <br/>Hello  <br/>Hello <br/>Hello <br/>Hello <br/>Hello <br/>Hello <br/>Hello <br/>{data.user.email}</p>
}