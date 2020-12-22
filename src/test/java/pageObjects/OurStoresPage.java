package pageObjects;

import helpers.Utils;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.io.File;
import java.io.IOException;
import java.util.Iterator;
import java.util.Set;

public class OurStoresPage extends Utils {

    public OurStoresPage() throws IOException {
    }

    Actions actions = new Actions(driver);

    //User story 5

    @FindBy(how = How.CSS, using = "#map")
    public static WebElement map;

    @FindBy(how = How.CSS, using = "html")
    public static WebElement webPage;

    @FindBy(how = How.LINK_TEXT, using = "Our stores")
    public static WebElement ourStores;

    @FindBy(how = How.CSS, using = "h1.page-heading")
    public static WebElement ourStoresPageHeading;

    @FindBy(how = How.CSS, using = ".dismissButton")
    public static WebElement dismissButton;

    public void scrollDown() throws InterruptedException {
        //actions.sendKeys(Keys.PAGE_DOWN).build().perform();
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,document.body.scrollHeight)");
    }

    public void selectOurStores() throws InterruptedException {
        waitForElement(ourStores,2);
        ourStores.click();
    }

    public String ourStoresPageHeadingText() throws InterruptedException {
        waitForElement(ourStoresPageHeading,2);
        return ourStoresPageHeading.getText();
    }

    public void closeErrorWindow() throws InterruptedException{
        dismissButton.click();
    }
    public void zoomIn() throws InterruptedException {
        implicitWait();
        for(int i=0; i<3; i++){
            webPage.sendKeys(Keys.chord(Keys.COMMAND,Keys.SUBTRACT));
        }
    }

    public void takeScreenshot() throws InterruptedException, IOException {
        File screenshotFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(screenshotFile, new File("src//test//resources//Screenshots//screenshot.png"));
    }
}