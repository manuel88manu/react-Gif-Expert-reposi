import { useEffect, useState } from "react"
import { getGifs } from "../helpers/GetGifs"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({category}) => {
  const {images,isLoading}=useFetchGifs(category)

  return (
  <>
    <h3>{category}</h3>
    {
      isLoading &&(  <h2>Cargandoo....</h2>)
  
    }
    <div className="card-grid">
      {images.map((imagen)=>(
        <GifItem key={imagen.id} {...imagen} />
      )
      )

      }
    
    </div>
  </>
  )
}
