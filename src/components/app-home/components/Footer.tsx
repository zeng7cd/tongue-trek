

export default function Footer() {
  return (
    <footer className="w-full py-6 max-w-screen-xl mx-auto">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2">
          <h3 className="text-lg font-semibold mb-2">关于我们</h3>
          <p>公司简介和使命</p>
        </div>
        <div className="w-1/2">
          <h3 className="text-lg font-semibold mb-2">联系方式</h3>
          <p>电话: 123-456-7890</p>
          <p>邮箱: contact@example.com</p>
        </div>
      </div>
      <div className="text-center mt-4">&amp;copy; {new Date().getFullYear()} 公司名称 版权所有</div>
    </footer>
  );
}
