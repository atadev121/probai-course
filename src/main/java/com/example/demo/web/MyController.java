package com.example.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping(value = "/probabilityCourse")
public class MyController {
	@RequestMapping("/whatisaset")
	String welcome(Model model) {
		return "What is a set";
	}
	
	@RequestMapping("/setTheory2")
	String welcomehn(Model model) {
		return "setTheory2";
	}
	
	@RequestMapping("/randomExperiment")
	String random(Model model) {
		return "randomExperiment";
	}
	
	
	@RequestMapping("/setTheory1")
	String welcomeeb(Model model) {
		return "setTheory1";
	}
	
	@RequestMapping("/introductionn")
	String welcomem(Model model) {
		return "template";
	}
	
	@RequestMapping("/introductionToPan")
	String welcomemm(Model model) {
		return "Introduction to proba and stat";
	}
	
	
	@RequestMapping("/randomvariable")
	String comb(Model model) {
		return "randomvariable";
	}
	
	@RequestMapping("/simul")
	String comb1(Model model) {
		return "tools";
	}
	@RequestMapping("/pream")
	String combm(Model model) {
		return "mathematical preamble to PandS";
	}
	@RequestMapping("/expectation")
	String com(Model model) {
		return "expectation";
	}
	
	
	@RequestMapping("/sdl")
	String como(Model model) {
		return "Sampling Distributions and Limits";
	}
	
	@RequestMapping("/sic")
	String comoi(Model model) {
		return "Statistical inference classical";
	}
	
	@RequestMapping("/lmra")
	String clm(Model model) {
		return "linear regression";
	}
	
	@RequestMapping("/la")
	String clmla(Model model) {
		return "linear algebra";
	}
}
