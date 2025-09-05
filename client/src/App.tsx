import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";

// For GitHub Pages, we'll use a simpler approach: 
// Just render the Home component directly since this is a single-page portfolio
function Router() {
  // Debug logging for production troubleshooting
  console.log("Current location:", window.location.pathname);
  console.log("Environment:", import.meta.env.PROD ? "production" : "development");
  
  // Always render Home component - this is a single-page portfolio
  return <Home />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
