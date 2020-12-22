package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.PendingException;

import org.openqa.selenium.support.PageFactory;
import pageObjects.OurStoresPage;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public class UserStory5Steps {

    private OurStoresPage ourStoresPage = PageFactory.initElements(OurStoresPage.driver, OurStoresPage.class);




    @When("^I scroll down and select our stores$")
    public void iScrollDownAndSelectOurStores() throws Throwable{
        ourStoresPage.scrollDown();
        ourStoresPage.selectOurStores();
    }


    @And("^I am on the Our Stores page$")
    public void iAmOnTheOurStoresPage() throws InterruptedException {
        assertEquals("Incorrect text", "OUR STORE(S)!" , ourStoresPage.ourStoresPageHeadingText() );
    }

    @Then("^I click ok on the error message$")
    public void iClickOkOnTheErrorMessage()throws InterruptedException
    {
        ourStoresPage.closeErrorWindow();
    }


    @And("^I zoom in on the map$")
    public void iZoomInOnTheMap() throws InterruptedException{
        ourStoresPage.zoomIn();
    }

    @And("^I take a screenshot$")
    public void iTakeAScreenshot() throws InterruptedException, IOException {
        ourStoresPage.takeScreenshot();
    }

    @Then("^I can see West Palm Beach within the screenshot$")
    public void iCanSeeWestPalmBeachWithinTheScreenshot() throws InterruptedException {

    }
}
