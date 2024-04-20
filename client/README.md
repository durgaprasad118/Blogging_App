# CLient

-   theme set

```js
import { Button } from "@radix-ui/themes";
import { useRecoilState, useSetRecoilState } from "recoil";
import { themeAtom } from "../store";

const Home = () => {
    const [theme, setTheme] = useRecoilState(themeAtom);
    const submitHandler = () => {
        theme == "dark" ? setTheme("light") : setTheme("dark");
    };
    return (
        <div>
            Home
            <Button onClick={submitHandler}>Click</Button>
        </div>
    );
};

export { Home };
```

# DIsplaying data

```js
const Home = () => {
    const content =
        '<p><strong style="font-family: &quot;Lucida Sans Unicode&quot;, &quot;Lucida Grande&quot;, sans-serif; font-size: 30px;">Hello there</strong></p><ul style="list-style-type: circle;"><li><br></li></ul><p>hello</p><ol style="list-style-type: upper-roman;"><li>a</li><li>b</li><li>c</li><li><br></li><br></ol>';
    const content2 =
        '<p><strong style="font-size: 48px;">Hello there I am a title of the blog&nbsp;</strong></p><ol style="list-style-type: upper-roman;"><li><strong style="font-size: 48px;">one</strong></li><li><strong style="font-size: 48px;">two</strong></li><li><strong style="font-size: 48px;">theree</strong></li><li><strong style="font-size: 48px;"><a href="https://www.google.com/">https://www.google.com/</a></strong></li><br></ol>';
    return (
        <div className="py-2 w-full bg-white dark:bg-gray-900 flex items-center justify-center flex-col gap-4 px-2 md:px-0">
            {/* <BlogPage /> */}
            <div
                className="text-white"
                dangerouslySetInnerHTML={{ __html: content2 }}
            />
        </div>
    );
};

export { Home };
```
