import org.example.*;
import org.junit.jupiter.api.Test;
import org.mockito.MockedStatic;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;

public class StaticStuffTest {

    @Test
    public void testNothing(){
        assert(true);
    }

    @Test
    public void testMockStaticMethodCall(){
        try (MockedStatic<FancyClassWithStaticMethod> myObject = Mockito.mockStatic(FancyClassWithStaticMethod.class)){

            FancyObject fancyObject = new FancyObject(new ObjectParam1(), new ObjectParam2());
            fancyObject.setName("Test");

            myObject.when(() -> FancyClassWithStaticMethod.getFancyObject(any(), any())).thenReturn(fancyObject);

            String result = new Main().methodToCall();

            assertEquals("Test", result);
        }
    }
}
