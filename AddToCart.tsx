"use client";
import { useState } from "react";

export default function AddToCart({productId,productName,imageUrl,variants}:{productId:string;productName:string;imageUrl:string;variants:{id:string;labelBn:string;price:number;stockGrams:number}[]}) {
  const [idx,setIdx]=useState(0); const [qty,setQty]=useState(1);
  const v=variants[idx];
  function add(buy=false){
    if(!v || v.stockGrams<=0) return;
    const cart=JSON.parse(localStorage.getItem("fmc_cart")||"[]");
    const key=`${productId}:${v.id}`;
    const old=cart.find((x:any)=>x.key===key);
    if(old) old.quantity+=qty;
    else cart.push({key,productId,variantId:v.id,productName,imageUrl,variantName:v.labelBn,unitPrice:v.price,quantity:qty});
    localStorage.setItem("fmc_cart",JSON.stringify(cart));
    window.dispatchEvent(new Event("fmc-cart"));
    if(buy) window.location.href="/cart";
    else alert("কার্টে যোগ হয়েছে");
  }
  return <div>
    <label>পরিমাণ</label>
    <select value={idx} onChange={e=>{setIdx(Number(e.target.value));setQty(1)}} style={{width:"100%",padding:14,borderRadius:12,border:"1px solid #ddd",margin:"8px 0 16px"}}>
      {variants.map((x,i)=><option key={x.id} value={i}>{x.labelBn} — ৳{x.price}</option>)}
    </select>
    <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:18}}>
      <button className="btn" style={{border:"1px solid #ddd"}} onClick={()=>setQty(Math.max(1,qty-1))}>−</button><b>{qty}</b><button className="btn" style={{border:"1px solid #ddd"}} onClick={()=>setQty(qty+1)}>+</button>
    </div>
    <div style={{fontSize:28,fontWeight:900,marginBottom:18,color:"#16834b"}}>৳{(v?.price||0)*qty}</div>
    <div style={{display:"flex",gap:10}}><button className="btn btn-primary" onClick={()=>add(false)}>কার্টে যোগ করুন</button><button className="btn" style={{background:"#18231e",color:"#fff"}} onClick={()=>add(true)}>এখনই কিনুন</button></div>
  </div>
}
