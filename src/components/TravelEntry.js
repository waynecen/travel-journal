import React from "react";
import Divider from "./Divider";
import locationMarker from "../img/location-marker1-5x.png";
// import mountFuji from "../img/mountFuji.png";

export default function TravelEntry(props) {
	return (
		<div className="travelEntry flex-col">
			<div className="wrapper__entry flex-row">
				<img
					src={`../img/${props.entry.imageUrl}`}
					alt=""
					className="entry--img"
				/>
				<div className="flex-col">
					<div className="wrapper__location flex-row">
						<img
							src={locationMarker}
							className="location-marker"
						></img>
						<h5 className="location">{props.entry.location}</h5>
						<a
							href={`${props.entry.googleMapsUrl}`}
							className="link__googleMaps"
						>
							View on Google Maps
						</a>
					</div>
					<h3 className="title">{props.entry.title}</h3>
					<h4 className="startEndDate">
						{props.entry.startDate} - {props.entry.endDate}
					</h4>
					<p className="description">{props.entry.description}</p>
				</div>
			</div>
			<Divider />
		</div>
	);
}
