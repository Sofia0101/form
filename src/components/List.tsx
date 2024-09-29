interface Props {
    subs: Array<{  
        nickname: string
        subMonths: number
        avatar: string
        description?: string
    }>

}

export default function List ({subs}: Props)
{
    return (
        <ul>
        {
        subs.map(subssofi => {
        return (
          <li key={subssofi.nickname}>
            <img src={subssofi.avatar} alt="avatar" />
            <h4>{subssofi.nickname} (<small>{subssofi.subMonths}</small>)</h4>
            <p>{subssofi.description?.substring(0, 100)}</p>
          
          </li>
        )
        })
      }
      </ul>
    )
}