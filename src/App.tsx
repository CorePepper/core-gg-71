import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Reviews from "./pages/Reviews";

// ▼ ▼ GitHub Pages で React Router を使う際の注意点
// サブディレクトリ /core-gg-71/ を使う場合、本番でのみ basename="/core-gg-71" を指定
// ローカル開発 (npm run dev) では basename="" にしておくと、http://localhost:8080/ でアクセスしやすい

const queryClient = new QueryClient();

// Vite環境変数からモードを取得
// "production" のときだけ basename="/core-gg-71" を指定する例
const isProduction = import.meta.env.MODE === "production";
const baseName = isProduction ? "/core-gg-71" : "";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toaster & Sonner の両方を使う構成 */}
      <Toaster />
      <Sonner />

      <BrowserRouter basename={baseName}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
