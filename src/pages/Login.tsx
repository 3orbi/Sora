import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Loader2 } from "lucide-react";

const Login = () => {
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  if (user) {
    navigate("/");
    return null;
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await signIn(loginEmail, loginPassword);
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      navigate("/");
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    const { error } = await signUp(registerEmail, registerPassword);
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Account created! Check your email to confirm, then log in.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 70% 20%, #FDF2F2 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, #F1F4FF 0%, transparent 50%), #FCF9F9",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-16 right-16 w-[200px] h-[200px] rounded-4xl bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=200&h=200&fit=crop)" }}
      />
      <div
        className="absolute bottom-20 left-16 w-40 h-40 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(164,48,115,0.15) 0%, transparent 70%)", filter: "blur(40px)" }}
      />

      {/* Logo */}
      <div className="text-center mb-8">
        <Link to="/">
          <h1 className="font-black text-4xl text-slate-sub" style={{ letterSpacing: -1.8 }}>
            Sonic Atelier
          </h1>
        </Link>
        <p className="mt-1 text-[10px] font-bold tracking-[2px] text-slate-muted uppercase">
          THE DIGITAL GALLERY OF SOUND
        </p>
      </div>

      {/* Card */}
      <Card className="w-full max-w-[480px] border-0 shadow-none bg-rose-50 rounded-4xl relative z-10">
        <CardContent className="p-12">
          {error && (
            <div className="mb-4 px-4 py-3 rounded-2xl bg-red-50 text-red-600 text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 px-4 py-3 rounded-2xl bg-green-50 text-green-600 text-sm">
              {success}
            </div>
          )}

          <Tabs defaultValue="login" className="w-full" onValueChange={() => { setError(""); setSuccess(""); }}>
            <TabsList className="bg-transparent p-0 h-auto gap-8 mb-8 w-full justify-start">
              <TabsTrigger
                value="login"
                className="bg-transparent px-0 pb-2 text-base font-bold data-[state=active]:text-slate-heading data-[state=active]:shadow-none data-[state=inactive]:text-slate-muted rounded-none data-[state=active]:border-b-2 data-[state=active]:border-slate-sub"
              >
                Login
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="bg-transparent px-0 pb-2 text-base font-bold data-[state=active]:text-slate-heading data-[state=active]:shadow-none data-[state=inactive]:text-slate-muted rounded-none data-[state=active]:border-b-2 data-[state=active]:border-slate-sub"
              >
                Register
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <div>
                  <label className="text-[10px] font-bold tracking-[2px] text-slate-body uppercase">EMAIL</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    required
                    className="mt-2 bg-white border-0 rounded-full h-14 px-6 text-sm text-slate-heading placeholder:text-slate-placeholder focus-visible:ring-rose-500"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold tracking-[2px] text-slate-body uppercase">PASSWORD</label>
                    <button
                      type="button"
                      className="text-xs font-medium text-rose-500 hover:underline"
                      onClick={() => { setError(""); setSuccess("Password reset is not configured yet. Add your Supabase keys first."); }}
                    >
                      Forgot?
                    </button>
                  </div>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    required
                    className="mt-2 bg-white border-0 rounded-full h-14 px-6 text-sm text-slate-heading placeholder:text-slate-placeholder focus-visible:ring-rose-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 rounded-full h-14 bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm gap-2"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <>Login <ArrowRight size={16} /></>}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="register">
              <form onSubmit={handleRegister} className="flex flex-col gap-5">
                <div>
                  <label className="text-[10px] font-bold tracking-[2px] text-slate-body uppercase">USERNAME</label>
                  <Input
                    type="text"
                    placeholder="Choose a username"
                    value={registerUsername}
                    onChange={(e) => setRegisterUsername(e.target.value)}
                    required
                    className="mt-2 bg-white border-0 rounded-full h-14 px-6 text-sm text-slate-heading placeholder:text-slate-placeholder focus-visible:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold tracking-[2px] text-slate-body uppercase">EMAIL</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    required
                    className="mt-2 bg-white border-0 rounded-full h-14 px-6 text-sm text-slate-heading placeholder:text-slate-placeholder focus-visible:ring-rose-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold tracking-[2px] text-slate-body uppercase">PASSWORD</label>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    required
                    minLength={6}
                    className="mt-2 bg-white border-0 rounded-full h-14 px-6 text-sm text-slate-heading placeholder:text-slate-placeholder focus-visible:ring-rose-500"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 rounded-full h-14 bg-secondary hover:bg-secondary/90 text-white font-semibold text-sm gap-2"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <>Register <ArrowRight size={16} /></>}
                </Button>
              </form>
            </TabsContent>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <Separator className="flex-1 bg-border" />
              <span className="text-[10px] font-bold tracking-[2px] text-slate-muted uppercase">
                OR CONTINUE WITH
              </span>
              <Separator className="flex-1 bg-border" />
            </div>

            {/* Social */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="flex-1 rounded-full h-12 bg-white border-0 text-sm font-medium text-slate-body hover:bg-white/80 gap-3"
                onClick={() => { setError("Google OAuth requires Supabase configuration. Add your keys to .env first."); }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Google
              </Button>
              <Button
                variant="outline"
                className="flex-1 rounded-full h-12 bg-white border-0 text-sm font-medium text-slate-body hover:bg-white/80 gap-3"
                onClick={() => { setError("Facebook OAuth requires Supabase configuration. Add your keys to .env first."); }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </Button>
            </div>
          </Tabs>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-[11px] text-slate-muted opacity-50">
          By continuing, you agree to Sonic Atelier's Terms of Service and Privacy Policy.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          {["T", "I", "Y"].map((letter) => (
            <div
              key={letter}
              className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity bg-rose-50"
            >
              <span className="text-[10px] font-semibold text-slate-muted">{letter}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
