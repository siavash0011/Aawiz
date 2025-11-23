'use client';

import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { User, BarChart3, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const techs = [
    { name: 'Next.js 14', src: '/nextjs.jpg', description: 'Latest version with App Router' },
    { name: 'TypeScript', src: '/1.png', description: 'Type-safe development' },
    { name: 'Tailwind CSS', src: '/images.png', description: 'Modern styling solution' },
    { name: 'Protected Routes', src: '/3.png', description: 'Secure authentication' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.img
            src="/aawiz_logo.jpg"
            alt="Aawiz Logo"
            className="mx-auto mb-6 w-32 h-32"
            variants={item}
          />
          <motion.h1 className="text-4xl font-bold tracking-tight mb-2" variants={item}>
            Welcome to Aawiz
          </motion.h1>

          {/* Curved line under "Aawiz" */}
          {/* Curved line under "Aawiz" */}
<motion.svg
  width="200"
  height="20"
  viewBox="0 0 200 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="mx-auto mb-4"
>
  <motion.path
    d="M0 10 Q100 30 200 10" // gentle curve
    stroke="#6366f1" // indigo-500
    strokeWidth="3"
    fill="transparent"
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{ duration: .7, ease: "easeInOut" }}
  />
</motion.svg>


          <motion.p className="text-xl text-muted-foreground max-w-2xl mx-auto" variants={item}>
            AI-powered HR platform for smarter recruitment, employee management, and insights.
          </motion.p>

          <motion.div className="mt-8" variants={item}>
            <Link href="/login">
              <Button size="lg">Get Started</Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader >
              <div className="w-12 h-12 rounded-lg bg-primary/10 mx-auto flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>User Authentication</CardTitle>
              <CardDescription>
                Secure login system with protected routes and session management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/login" className="w-full">
                <Button className="w-full">Login</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex mx-auto items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Live Dashboard</CardTitle>
              <CardDescription>
                Real-time data fetching with beautiful visualizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Login to access your personalized dashboard</p>
            </CardContent>
          </Card>

          <Card className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center mx-auto justify-center mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Dark Mode</CardTitle>
              <CardDescription>
                Seamless theme switching with persistent user preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Toggle the theme using the button in the navigation bar</p>
            </CardContent>
          </Card>
        </div>

        {/* Techs Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-6">Technologies Used</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {techs.map((tech) => (
              <Card key={tech.name} className="flex flex-col items-center p-6 transition-shadow hover:shadow-lg">
                <img src={tech.src} alt={tech.name} className="w-16 h-16 mb-4" />
                <h3 className="font-semibold mb-1">{tech.name}</h3>
                <p className="text-sm text-muted-foreground text-center">{tech.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
