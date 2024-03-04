import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useTheme } from "./components/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./components/ui/dropdown-menu";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Tech from "./pages/Tech";
import { Button } from "./components/ui/button";
import { Moon, Sun } from "lucide-react";
import { ParallaxBanner } from "react-scroll-parallax";

function App() {
  const { setTheme } = useTheme();

  return (
    <div className="container max-w-screen-2xl h-[100svh]  mx-auto p-4 sm:p-8 md:p-12 lg:p-16  text-gray-600 ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed bottom-5 right-5 z-20 "
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <About />
      <Tech />
      <Portfolio />
    </div>
  );
}

export default App;
