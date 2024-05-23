

export const fetchData=async()=> {
    const res = await fetch('/api/getProducts');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }


  export const fetchCategory=async(payload)=>{
    const res = await fetch(`/api/getCategory?category=${payload}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }


  export const fetchOneProduct=async(payload)=>{
    const res = await fetch(`/api/getOneProduct?title=${payload}`);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }