import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 800));

    // Always allow access
    onLogin('', 'acesso123');
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Bem-vindo(a) ao caminho da fluência!
            </h1>
            <h2 className="text-xl font-semibold text-blue-200 mb-2">
              500 Prompts ChatGPT
            </h2>
            <p className="text-blue-200 text-sm">
              Para Aprender e Dominar o Inglês
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-blue-200 text-lg leading-relaxed">
                Sua jornada para dominar o inglês com 500 prompts exclusivos do ChatGPT começa agora!
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Entrando...
                </div>
              ) : (
                'Acessar Área de Membros'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-blue-200 text-sm">
              Clique no botão acima para acessar seus 500 prompts exclusivos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;