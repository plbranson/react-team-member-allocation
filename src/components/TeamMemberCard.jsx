/*
 *  Copyright 2022 Patrick L. Branson
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React, { useContext } from "react";

import DataContext from "../context/DataContext";
import maleProfile from "../assets/images/maleProfile.jpg";
import femaleProfile from "../assets/images/femaleProfile.jpg";

export default function TeamMemberCard({ employee }) {
  const { handleEmployeeCardClick, selectedTeam } = useContext(DataContext);

  return (
    <div
      id={employee.id}
      onClick={handleEmployeeCardClick}
      style={{ cursor: "pointer" }}
      className={
        employee.selectedTeam === selectedTeam
          ? "card m-2 standout"
          : "card m-2"
      }
    >
      {employee.gender === "male" ? (
        <img src={maleProfile} className="card-img-top" alt="profile" />
      ) : (
        <img src={femaleProfile} className="card-img-top" alt="profile" />
      )}
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text">
          <b>Designation:</b> {employee.designation}
        </p>
      </div>
    </div>
  );
}
