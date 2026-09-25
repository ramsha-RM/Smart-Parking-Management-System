import React from "react";
import Badge from "../common/Badge";

export default function VehicleCard({ vehicle }){
    return(
        <div className="vehicle-card">
            <div className="vehicleTop">
                <span className="mono">{vehicle.numberPlate}</span>
                <Badge status={vehicle.status} />
            </div>
        </div>
    )
}