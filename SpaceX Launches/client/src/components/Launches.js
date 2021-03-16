import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
import { LAUNCHES_QUERY } from '../query/query';


function Launches() {
    return (
        <div>
            <h1 className="display-4 my-3">Launches</h1>
            <MissionKey/>
            <Query query ={ LAUNCHES_QUERY }>
                {
                ({ loading, error, data })=>{
                    if(loading) return <h4>loading..</h4>
                    if(error) console.log(error);
                    return(
                        <>
                        {
                            data.launches.map(launch=>{
                                return (
                                    <LaunchItem key={launch.flight_number} launch={launch}/>
                                )
                            })
                        }
                       </>
                    )
                }
                }
            </Query>
        </div>
    )
}

export default Launches