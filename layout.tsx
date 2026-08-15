import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Fresh Meat Co | তাজা মাংস ও গ্রোসারি",
  description: "Fresh Meat Co থেকে তাজা মাংস ও মাছ আপনার দরজায়।"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body>
        <header style={{background:"#fff",borderBottom:"1px solid #e8eee9",position:"sticky",top:0,zIndex:30}}>
          <div className="container" style={{height:70,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <Link href="/" style={{fontSize:24,fontWeight:900,color:"#16834b"}}>Fresh Meat Co</Link>
            <nav style={{display:"flex",gap:18,fontWeight:700}}>
              <Link href="/">হোম</Link><Link href="/shop">শপ</Link><Link href="/orders">অর্ডার</Link><Link href="/account">অ্যাকাউন্ট</Link><Link href="/cart">🛒 কার্ট</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer style={{marginTop:60,background:"#18231e",color:"#fff",padding:"45px 0 90px"}}>
          <div className="container">
            <h2>Fresh Meat Co</h2>
            <p style={{opacity:.8}}>তাজা, স্বাস্থ্যসম্মত ও নির্ভরযোগ্য মাংস আপনার দরজায়।</p>
            <p style={{opacity:.7}}>© {new Date().getFullYear()} Fresh Meat Co. সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </footer>
        <div style={{position:"fixed",right:16,bottom:18,zIndex:40}}>
          <a className="btn" style={{background:"#25D366",color:"#fff",borderRadius:999}} href="https://wa.me/" target="_blank">WhatsApp</a>
        </div>
      </body>
    </html>
  );
}
