import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "@supabase/supabase-js";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import '../assets/Styles/login.css';
import {useState, useEffect} from 'react'
const Login = () => {
   const supabaseURL = "https://bafyjfoalyjhqzfnfywx.supabase.co";
    const supabasePublicURL = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhZnlqZm9hbHlqaHF6Zm5meXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4NTA1NDcsImV4cCI6MjA0NzQyNjU0N30.VY0pDr7Gy3U8N1hUdjfx8LgzMhQc76M4NwV415J1djo";
   const supabase = createClient(supabaseURL, supabasePublicURL);

   
  const [session, setSession] = useState(null);


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);
  if (!session) {
    return (
    <center>
      <div
        style={{
          width: "400px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={["google", "facebook", "github"]}
          />
        </div>


      </div></center>
    );
  } else {
    return (
      <div>
        <div>Logged in!</div>
        <button onClick={() => supabase.auth.signOut()}>Sign out</button>
      </div>
    );
  }

}
export default Login;