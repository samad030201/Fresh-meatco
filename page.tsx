import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const [categories, products] = await Promise.all([
    prisma.category.findMany({ orderBy:{ nameBn:"asc" } }),
    prisma.product.findMany({ where:{ active:true }, include:{variants:true}, take:8, orderBy:{createdAt:"desc"} })
  ]);

  return <div>
    <section style={{background:"linear-gradient(100deg,#10271c,#16834b)",color:"#fff"}}>
      <div className="container" style={{minHeight:430,display:"grid",placeItems:"center",textAlign:"center",padding:"70px 0"}}>
        <div>
          <div style={{fontSize:15,fontWeight:800,letterSpacing:2}}>FRESH • CLEAN • TRUSTED</div>
          <h1 style={{fontSize:"clamp(38px,7vw,70px)",margin:"15px 0"}}>Fresh Meat Delivered to Your Door</h1>
          <p style={{fontSize:19,opacity:.9}}>তাজা ও স্বাস্থ্যসম্মত মাংস, মাছ ও গ্রোসারি—সহজ অনলাইনে অর্ডার করুন।</p>
          <Link className="btn btn-primary" style={{background:"#fff",color:"#16834b",marginTop:18}} href="/shop">এখনই শপ করুন</Link>
        </div>
      </div>
    </section>

    <section className="container" style={{padding:"55px 0"}}>
      <h2>ক্যাটাগরি</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:14,marginTop:20}}>
        {categories.map(c=><Link key={c.id} href={`/shop?category=${c.slug}`} className="card" style={{padding:25,fontWeight:800,textAlign:"center"}}>{c.nameBn}</Link>)}
      </div>
    </section>

    <section className="container" style={{paddingBottom:55}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><h2>জনপ্রিয় পণ্য</h2><Link href="/shop">সব দেখুন →</Link></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:18,marginTop:20}}>
        {products.map(p=>{
          const v=p.variants[0];
          return <Link href={`/product/${p.slug}`} key={p.id} className="card" style={{overflow:"hidden"}}>
            <Image src={p.imageUrl} alt={p.nameBn} width={700} height={480} style={{width:"100%",height:190,objectFit:"cover"}} />
            <div style={{padding:18}}><h3>{p.nameBn}</h3><strong style={{color:"#16834b"}}>৳{v?.discountPrice ?? v?.price} / {v?.labelBn}</strong></div>
          </Link>
        })}
      </div>
    </section>

    <section style={{background:"#eaf5ed",padding:"55px 0"}}>
      <div className="container">
        <h2>কেন Fresh Meat Co?</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:16,marginTop:20}}>
          {["তাজা ও স্বাস্থ্যসম্মত","দ্রুত ডেলিভারি","মানসম্মত পণ্য","সহজ অনলাইন অর্ডার"].map(x=><div className="card" style={{padding:22}} key={x}><h3>{x}</h3><p style={{color:"#617068"}}>গ্রাহকের আস্থা ও মানকে সর্বোচ্চ গুরুত্ব দিয়ে সেবা।</p></div>)}
        </div>
      </div>
    </section>
  </div>
}
