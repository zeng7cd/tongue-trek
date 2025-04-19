import React from "react";

export default function Main() {
  return (
    <main className=" max-w-screen-xl w-full mx-auto  h-[100vh]">
      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          让你上瘾的 <span>英语学习工具</span>
        </h1>
        <p className="text-xl">探索我们的产品和服务</p>
      </section>

      <section className="container mx-auto max-w-screen-xl py-10">
        <h2 className="text-3xl font-semibold mb-8 text-center">我们的优势</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg text-center">优质服务</div>
          <div className="p-4 border rounded-lg text-center">专业团队</div>
          <div className="p-4 border rounded-lg text-center">多年经验</div>
        </div>
      </section>
    </main>
  );
}
