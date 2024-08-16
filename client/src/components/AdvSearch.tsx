import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserLanguage } from '../lib/languageDetect';

interface SearchParams {
    search: string;
    type: string;
    year: string;
    title: string;
    release_title: string;
    credit: string;
    artist: string;
    anv: string;
    label: string;
    genre: string;
    style: string;
    country: string;
}

const initialSearchParams: SearchParams = {
    search: '',
    type: '',
    year: '',
    title: '',
    release_title: '',
    credit: '',
    artist: '',
    anv: '',
    label: '',
    genre: '',
    style: '',
    country: ''
};

const AdvSearch: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchParams, setSearchParams] = useState<SearchParams>(initialSearchParams);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSearchParams((prevParams) => ({
            ...prevParams,
            [name]: value
        }));
    };

    const handleSearchClick = (value: string) => {
        setSearchParams((prevParams) => ({
            ...prevParams,
            search: value
        }));
        handleSubmit({ ...searchParams, search: value });
    };

    const handleSubmit = (params: SearchParams) => {
        // Filter out empty parameters
        const filteredParams = Object.entries(params)
            .filter(([_, value]) => value !== '')
            .reduce((acc, [key, value]) => {
                acc[key as keyof SearchParams] = value;
                return acc;
            }, {} as Partial<SearchParams>);

        const query = new URLSearchParams(filteredParams as Record<string, string>).toString();
        navigate(`/?${query}`);
    };

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const userLanguage = getUserLanguage();
    const isJp = userLanguage === "ja";

    return (
        <>
            <div className="rounded-md px-8 py-4 grid gap-4 grid-cols-[auto_auto] place-content-center place-items-center">
                {isJp ? (
                    <Button className="self-end mb-2" onClick={toggleMenu}>
                        {isOpen ? '閉じる' : '詳細検索'}
                    </Button>
                ) : (
                    <Button className="self-end mb-2" onClick={toggleMenu}>
                        {isOpen ? 'Close' : 'Advanced Search'}
                    </Button>
                )}
            </div>

            {isOpen && (
                <form className="rounded-md px-12 py-4 grid gap-4 grid-cols-3 place-items-center" onSubmit={(e) => { e.preventDefault(); handleSubmit(searchParams); }}>
                    {Object.keys(searchParams).map((param) => (
                        <div key={param} className="mb-2 w-72">
                            <Label htmlFor={param}>Enter {param.replace('_', ' ')}: </Label>
                            <Input
                                id={param}
                                type="text"
                                name={param}
                                value={searchParams[param as keyof SearchParams]}
                                onChange={handleInputChange}
                            />
                        </div>
                    ))}
                    <div className="col-span-3 flex flex-wrap gap-1 justify-center">
                        {letters.map(letter => (
                            <Button
                                key={letter}
                                type="button"
                                className="mb-2"
                                onClick={() => handleSearchClick(letter)}
                            >
                                {letter}
                            </Button>
                        ))}
                    </div>
                    <div className="col-span-3">
                        {isJp ? (<Button type="submit">検索</Button>) : (<Button type="submit">Search</Button>)}
                    </div>
                </form>
            )}
        </>
    );
};

export default AdvSearch;
