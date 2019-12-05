import React, { Component } from "react";
import ProfileCover from "./profileCover";
import CardTitle from "./cardTitle";
import CommonButtons from "./commonButtons";
import generalInput from "./renderInput";
import Card from "@material/react-card";
import { Grid, Cell, Row } from "@material/react-layout-grid";

import { getlanguage, getcountries, getskills } from "../utils/menu";

class EditProfile extends generalInput {
  state = {
    language: getlanguage(),
    countries: getcountries(),
    skills: getskills()
  };
  render() {
    return (
      <Grid>
        <ProfileCover
          headline="Manage Profile"
          subtitle="This is your time to shine. Let everyone know what you do best and
                  how you gained your skills, certifications and experience."
          name="Abdullah Rafaqat"
          email="abdullah.rafaqat@boltreactor.com"
          actionText="Preview public mode"
        />
        <Row className="seven">
          <Cell desktopColumns={2}></Cell>
          <Cell desktopColumns={8} tabletColumns={8} phoneColumns={4}>
            <Row>
              <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
                <Row>
                  <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                    <Card outlined className="cardShape1">
                      <Row className="cd-ed-layout">
                        <CardTitle
                          title="Introduction"
                          subtitle="What is your story in one line?"
                        />
                        {this.renderInput("Introduction", "text", 36)}
                        <CommonButtons />
                        <CardTitle
                          title="Description"
                          subtitle="Please tell us about any hobbies, additional expertise, or anything else you’d like to add."
                        />
                        {this.renderInput("Description", "text", 250)}
                        <CommonButtons />
                      </Row>
                    </Card>
                  </Cell>
                  <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                    <Card outlined className="cardShape1">
                      <Row className="cd-ed-layout">
                        <CardTitle
                          title="Languages"
                          subtitle="Select which languages you can communicate in and your proficiency level."
                          action="Add languages"
                        />

                        {this.renderInput("Add Language", "text")}

                        {this.renderMenu(this.state.language, "Proficiency")}
                        <CommonButtons />
                      </Row>
                    </Card>
                  </Cell>

                  <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                    <Card outlined className="cardShape1">
                      <Row className="cd-ed-layout">
                        <CardTitle
                          title="Skills"
                          subtitle="List the skills related to the services you're offering and add your experience level."
                          action="Add Skills"
                        />

                        {this.renderInput("Add skill", "text")}
                        {this.renderMenu(this.state.skills, "Experience Level")}
                        <CommonButtons />
                      </Row>
                    </Card>
                  </Cell>

                  <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                    <Card outlined className="cardShape1">
                      <Row className="cd-ed-layout">
                        <CardTitle
                          title="Personal Website"
                          subtitle="Include a link to your personal website or portfolio with your work samples."
                          action="Add Website"
                        />
                        {this.renderInput("Add personal website", "text")}

                        <CommonButtons />
                      </Row>
                    </Card>
                  </Cell>
                </Row>
              </Cell>

              <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
                <Row>
                  <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                    <Card outlined className="cardShape1">
                      <Row className="cd-ed-layout">
                        <CardTitle
                          title="Education"
                          subtitle="Add any relevant education details that will help customers to get to know you better."
                          action="Add Education"
                        />
                        {this.renderMenu(this.state.countries, "AFGHANISTAN")}
                        {this.renderInput("College/University name", "text")}
                        {this.renderInput("Degree title", "text")}
                        {this.renderInput("Main course/field of study", "text")}
                        {this.renderInput("Year(YYYY)", "text")}
                        <CommonButtons />
                      </Row>
                    </Card>
                  </Cell>
                  <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                    <Card outlined className="cardShape1">
                      <Row className="cd-ed-layout">
                        <CardTitle
                          title="Certification"
                          subtitle="Include any certificates or awards that are relevant to the services you're offering."
                          action="Add Certification"
                        />
                        {this.renderInput("Certificate or award", "text")}
                        {this.renderInput(
                          "Certificate from (E.g. Adobe)",
                          "text"
                        )}
                        {this.renderInput("Year(YYYY)", "text")}

                        <CommonButtons />
                      </Row>
                    </Card>
                  </Cell>

                  <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
                    <Card outlined className="cardShape1">
                      <Row className="cd-ed-layout">
                        <CardTitle
                          title="Work History"
                          subtitle="Add any relevant work history that will help customers to get to know you better."
                          action="Add Work"
                        />
                        {this.renderInput("Where you have worked?", "text")}
                        {this.renderInput("What is your job title?", "text")}
                        {this.renderInput("Start Year(YYYY)", "text")}
                        {this.renderInput("End Year(YYYY)", "text")}
                        {this.renderInput("Description", "text")}

                        <CommonButtons />
                      </Row>
                    </Card>
                  </Cell>
                </Row>
              </Cell>
            </Row>
          </Cell>
          <Cell desktopColumns={2}></Cell>
        </Row>
      </Grid>
    );
  }
}

export default EditProfile;
