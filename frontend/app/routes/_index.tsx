import { useState, useEffect } from 'react';
import type { MetaFunction } from "@remix-run/node";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5174')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setData(json)
      });
  }, []);

  return (
    <div>
      <h1>Welcome to Remix!</h1>
      <div className="flex flex-wrap m-16 border border-black p-8">
        {data.map((item, index) => (
          <Card key={JSON.stringify(item)}>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}