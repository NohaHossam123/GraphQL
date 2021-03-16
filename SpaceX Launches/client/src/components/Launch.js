import { Query } from 'react-apollo';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { LAUNCH_QUERY } from '../query/query'

function Launch(props){
    let { flight_number } = props.match.params;
    flight_number = parseInt(flight_number);
    return(
        <>
        <Query query={LAUNCH_QUERY} variables={{ flight_number}}>
            {
                ({ loading, error , data })=>{
                    if(loading) return <h4>Loading...</h4>
                    if(error) console.log(error);

                    return(
                        <>
                        <h4 className="mb-3">Launch Details</h4>
                        <ul className="list-group">
                            <li className="list-group-item">
                                Flight Number: {data.launch.flight_number}
                            </li>
                            <li className="list-group-item">
                                Launch Year: {data.launch.launch_year}
                            </li>
                            <li className="list-group-item">
                                Launch Successful:
                                <span
                                className={classNames({
                                    'text-success': data.launch.launch_success,
                                    'text-danger': !data.launch.launch_success
                                })}
                                >
                                {data.launch.launch_success ? 'Yes' : 'No'}
                                </span>
                            </li>
                        </ul>
                        <h4 className="my-3">Rocket Details</h4>
                        <ul className="list-group">
                        <li className="list-group-item">Rocket ID: {data.launch.rocket.rocket_id}</li>
                        <li className="list-group-item">
                            Rocket Name: {data.launch.rocket.rocket_name}
                        </li>
                        <li className="list-group-item">
                            Rocket Type: {data.launch.rocket.rocket_type}
                        </li>
                        </ul>
                        <hr/>
                        <Link to ="/" className="btn btn-secondary">Back</Link>
                        </>
                    )
                }
            }
        </Query>
        </>
    )
}

export default Launch;
